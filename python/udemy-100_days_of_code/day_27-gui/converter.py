import tkinter as tk

window = tk.Tk()
window.title("Miles to Km Converter")
window.minsize(width=500, height=300)
window.config(padx=100, pady=100) # Add some padding around the window

# is equal to label
is_equal_to = tk.Label(text="is equal to", font=("Arial", 12, "bold"))
is_equal_to.grid(column=0, row=1)
is_equal_to.config(padx=10, pady=10)

# Miles entry
miles_entry = tk.Entry(width=10)
miles_entry.grid(column=1, row=0)
miles_entry.insert(0, "0")

# Miles label
miles_label = tk.Label(text="Miles", font=("Arial", 12, "bold"))
miles_label.grid(column=2, row=0)
miles_label.config(padx=10, pady=10)

# Km label
km_label = tk.Label(text="Km", font=("Arial", 12, "bold"))
km_label.grid(column=2, row=1)
km_label.config(padx=10, pady=10)

# Result label
result_label = tk.Label(text="0", font=("Arial", 12, "bold"))
result_label.grid(column=1, row=1)
result_label.config(padx=10, pady=10)

def convert_miles_to_km():
    miles = float(miles_entry.get())
    km = miles * 1.609
    result_label.config(text=f"{km:.2f}")

# Convert button
convert_button = tk.Button(text="Convert", command=convert_miles_to_km)
convert_button.grid(column=1, row=2)
convert_button.config(padx=10, pady=10)

window.mainloop()