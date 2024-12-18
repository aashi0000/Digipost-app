# import pandas as pd
# import numpy as np
# from prophet import Prophet
# import os
# import matplotlib.pyplot as plt

# import multiprocessing
# PLOTS_DIR = "./plots"
# os.makedirs(PLOTS_DIR, exist_ok=True)
# if __name__ == "__main__":
#     multiprocessing.set_start_method("spawn")

# def generate_and_save_forecast():
#     # Step 1: Generate Dummy Data
#     np.random.seed(42)
#     dates = pd.date_range(start='2015-01-01', end='2023-12-01', freq='MS')
#     base_profits = 2000 + (np.arange(len(dates)) * 10) + np.random.normal(0, 200, len(dates))
#     seasonality = 300 * np.sin(2 * np.pi * (dates.month - 1) / 12)
#     festive_months = [11, 12]  # November and December
#     festive_effect = [500 if date.month in festive_months else 0 for date in dates]
#     monthly_profits = base_profits + seasonality + festive_effect
#     data = pd.DataFrame({'ds': dates, 'y': monthly_profits})

#     # Step 2: Initialize and Fit Prophet Model
#     model = Prophet(yearly_seasonality=True)
#     holidays = pd.DataFrame({
#         'holiday': 'festive_month',
#         'ds': pd.to_datetime([
#             '2015-11-01', '2015-12-01', '2016-11-01', '2016-12-01',
#             '2017-11-01', '2017-12-01', '2018-11-01', '2018-12-01',
#             '2019-11-01', '2019-12-01', '2020-11-01', '2020-12-01',
#             '2021-11-01', '2021-12-01', '2022-11-01', '2022-12-01',
#             '2023-11-01', '2023-12-01'
#         ]),
#         'lower_window': 0,
#         'upper_window': 0
#     })
#     model.add_country_holidays(country_name='IN')  # Add Indian holidays
#     model.fit(data)

#     # Step 3: Forecast Future Profits
#     future = model.make_future_dataframe(periods=24, freq='MS')
#     forecast = model.predict(future)

#     # Step 4: Save Forecast and Component Plots
#     forecast_plot_path = "./plots/forecast_plot.png"
#     components_plot_path = "./plots/components_plot.png"

#     model.plot(forecast).savefig(forecast_plot_path)
#     model.plot_components(forecast).savefig(components_plot_path)

#     return forecast_plot_path, components_plot_path

import pandas as pd
import numpy as np
from prophet import Prophet
import os
import matplotlib

matplotlib.use("Agg") 
import matplotlib.pyplot as plt
import multiprocessing

# Directory to save plots
PLOTS_DIR = "./plots"
os.makedirs(PLOTS_DIR, exist_ok=True)

def generate_and_save_forecast():
    """
    Generate post office profit forecast and save the plots as PNG files.
    Returns the paths of the saved forecast and components plots.
    """
    # Step 1: Generate Dummy Data
    np.random.seed(42)
    dates = pd.date_range(start="2015-01-01", end="2023-12-01", freq="MS")
    base_profits = 2000 + (np.arange(len(dates)) * 10) + np.random.normal(0, 200, len(dates))
    seasonality = 300 * np.sin(2 * np.pi * (dates.month - 1) / 12)
    festive_months = [11, 12]  # November and December
    festive_effect = [500 if date.month in festive_months else 0 for date in dates]
    monthly_profits = base_profits + seasonality + festive_effect
    data = pd.DataFrame({"ds": dates, "y": monthly_profits})

    # Step 2: Initialize and Fit Prophet Model
    model = Prophet(yearly_seasonality=True)
    holidays = pd.DataFrame({
        "holiday": "festive_month",
        "ds": pd.to_datetime([
            "2015-11-01", "2015-12-01", "2016-11-01", "2016-12-01",
            "2017-11-01", "2017-12-01", "2018-11-01", "2018-12-01",
            "2019-11-01", "2019-12-01", "2020-11-01", "2020-12-01",
            "2021-11-01", "2021-12-01", "2022-11-01", "2022-12-01",
            "2023-11-01", "2023-12-01"
        ]),
        "lower_window": 0,
        "upper_window": 0
    })
    model.add_country_holidays(country_name="IN")  # Add Indian holidays
    model.fit(data)

    # Step 3: Forecast Future Profits
    future = model.make_future_dataframe(periods=24, freq="MS")
    forecast = model.predict(future)

    # Step 4: Save Forecast and Component Plots
    forecast_plot_path = os.path.join(PLOTS_DIR, "forecast_plot.png")
    components_plot_path = os.path.join(PLOTS_DIR, "components_plot.png")

    fig_forecast = model.plot(forecast)
    fig_forecast.savefig(forecast_plot_path, bbox_inches="tight")

    fig_components = model.plot_components(forecast)
    fig_components.savefig(components_plot_path, bbox_inches="tight")

    return forecast_plot_path, components_plot_path


if __name__ == "__main__":
    # Ensure multiprocessing compatibility on macOS
    multiprocessing.set_start_method("spawn", force=True)

    # Generate and save plots
    forecast_path, components_path = generate_and_save_forecast()
    print(f"Forecast plot saved at: {forecast_path}")
    print(f"Components plot saved at: {components_path}")

