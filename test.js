a = [
    "Alsatian",
    "American",
    'American Contemporary'
'Asian'
'Beijing Cuisine'
'Californian'
'Chinese'
'Classic Cuisine'
'Classic French'
'Colombian'
'Contemporary'
'Creative'
'Emilian'
'European Contemporary'
'Filipino'
French
French Contemporary
Fusion
Fusion
Grills
Indian
Innovative
Italian
Japanese
Japanese Contemporary
Korean
Korean Contemporary
Latin American
Lebanese
Market Cuisine
Mediterranean Cuisine
Mexican
Middle Eastern
Modern Cuisine
Modern French
Moroccan
Portuguese
Regional Cuisine
Scandinavian
Seafood
Seafood
Seasonal Cuisine
Spanish
Steakhouse
Sushi
Tempura
Thai
Traditional Cuisine
Vegetarian
Yakitori
]

b = []

for (let i; i < a.length; i++) {
    c = a[i].split("(")
    b.push(c)
}
