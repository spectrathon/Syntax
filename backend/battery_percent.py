import psutil
import time

def get_battery_info():
    battery = psutil.sensors_battery()
    return {
        "percent": battery.percent,
        "secsleft": battery.secsleft,
        "power_plugged": battery.power_plugged,
    }

def main():
    while True:
        battery_info = get_battery_info()
        print(f"Battery percentage: {battery_info['percent']}%")
        print(f"Time remaining: {battery_info['secsleft']} seconds")
        print(f"Power plugged in: {battery_info['power_plugged']}")
        time.sleep(1)

if __name__ == "__main__":
    main()