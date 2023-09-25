




export default function getChoices(oldBrews) {

    const menuArr = ['espresso', 'americano', 'longBlack', 'coldBrew', 'latte', 'flatWhite', 'capuiccino', 'mocha', 'macchiato', 'chai', 'turmeric', 'icedCoffee', 'affogato']
    const methodArr= ['harioV6', 'mokapot', 'frenchpress', 'aeropress', 'chemax', 'shypon']
    const roastingArr = ['dark', 'medium', 'light']
    const grindArr = ['coarse', 'medium', 'fine']
    const totalBrew = oldBrews.length

    function countFrequency(data, array, option) {
        const frequency = {};

            for (const item of data) {
            const { menuName, methodName, roasting, grind } = item
            if (option === 'menu') {
                if (array.includes(menuName)) {
                    if (frequency[menuName]) {
                    frequency[menuName]++;
                    } else {
                    frequency[menuName] = 1;
                    }
                }
            } else if (option === 'method') {
                if (array.includes(methodName)) {
                    if (frequency[methodName]) {
                    frequency[methodName]++;
                    } else {
                    frequency[methodName] = 1;
                    }
                }
            } else if (option === 'roasting') {
            if (array.includes(roasting)) {
                if (frequency[roasting]) {
                frequency[roasting]++;
                } else {
                frequency[roasting] = 1;
                }
            }
            } else if (option === 'grind') {
            if (array.includes(grind)) {
                if (frequency[grind]) {
                frequency[grind]++;
                } else {
                frequency[grind] = 1;
                }
            }
            }
        }
        
        const sortedFrequency = Object.entries(frequency)
          .sort((a, b) => b[1] - a[1]);
        
        const result = sortedFrequency.slice(0, 1)
      
        return result;
    }

    function getMostFrequentValue(data, key) {
        const valueCount = {};
        
        data.forEach(item => {
            const value = item[key];
            if (valueCount[value]) {
              valueCount[value]++;
            } else {
              valueCount[value] = 1;
            }
          });

        const sortedCounts = Object.entries(valueCount).sort((a, b) => b[1] - a[1]);

        return sortedCounts[0][0];
    }

    if (oldBrews.length <= 3) {
        return "Too less Brew history for calculating.."
    } else {
        const menuChoice =  countFrequency(oldBrews, menuArr, "menu");
        const methodChoice = countFrequency(oldBrews, methodArr, "method");
        const roastingChoice = countFrequency(oldBrews, roastingArr, "roasting");
        const grindChoice = countFrequency(oldBrews, grindArr, "grind");
        const coffeeChoice = getMostFrequentValue(oldBrews, 'coffee')
        const waterChoice = getMostFrequentValue(oldBrews, 'water')
        console.log(totalBrew, menuChoice, methodChoice, roastingChoice, grindChoice, coffeeChoice, waterChoice)
        
        const choices = {
            menu: menuChoice,
            method: methodChoice,
            roasting: roastingChoice,
            grind: grindChoice,
            coffee: coffeeChoice,
            water: waterChoice
          };

        return choices
    }
}