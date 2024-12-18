import * as React from "react";
import { View, Text, StyleSheet, Image, PanResponder, Animated } from "react-native";
import { ImageBackground } from "react-native-web";

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [swiping, setSwiping] = React.useState(false);

  const images = [
    require("@/assets/images/slider1.png"),
    require("@/assets/images/slider2.png"),
    require("@/assets/images/empofmonth.png"), // Add more images as needed
  ];

  const dots = Array(images.length).fill(null);

  const swipeX = new Animated.Value(0);

  // Function to handle the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handle the swipe gesture
  const panResponder = React.useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (e, gestureState) => {
          swipeX.setValue(gestureState.dx); // Update swipeX with current gesture
        },
        onPanResponderRelease: (e, gestureState) => {
          if (gestureState.dx > 50) {
            nextImage(); // Move to the next image on right swipe
          } else if (gestureState.dx < -50) {
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? images.length - 1 : prevIndex - 1
            ); // Move to the previous image on left swipe
          }

          Animated.spring(swipeX, {
            toValue: 0,
            useNativeDriver: true,
          }).start(); // Reset swipeX position after release
        },
      }),
    []
  );

  // Automatically swipe every 5 seconds when no swipe is detected
  React.useEffect(() => {
    if (!swiping) {
      const interval = setInterval(() => {
        nextImage();
      }, 5000); // Change the image every 5 seconds

      return () => clearInterval(interval); // Clear the interval when component unmounts or swiping occurs
    }
  }, [swiping]);

  // Animated swipe effect for smooth transition between images
  const animatedTranslateX = swipeX.interpolate({
    inputRange: [-300, 0, 300],
    outputRange: [-300, 0, 300],
  });

  return (
    <View style={styles.heroContainer}>
      <View style={styles.heroContent}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[styles.imageContainer, { transform: [{ translateX: animatedTranslateX }] }]}>
          <Image
            source={images[currentIndex]}
            style={styles.image}
          />
        </Animated.View>
        <View style={styles.dotContainer}>
          {dots.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, currentIndex === index && styles.activeDot]}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heroContainer: {
    alignSelf: "stretch",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
  },
  heroContent: {
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    minHeight: 231,
    width: "100%",
    position: "relative",
  },
  imageContainer: {
    width: "100%",
    // No fixed height here
  },
  image: {
    width: "100%",
    height: undefined, // Let height adjust automatically based on aspect ratio
    aspectRatio: 1.77, // This is an example ratio (16:9), adjust it to match your images' aspect ratio
  },
  dotContainer: {
    alignSelf: "center",
    display: "flex",
    marginTop: 10,
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  dot: {
    borderRadius: 50,
    width: 8,
    height: 8,
    backgroundColor: "#FFF",
  },
  activeDot: {
    backgroundColor: "#FF5733", // Active dot color
  },
});
