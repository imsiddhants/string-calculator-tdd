class StringCalculator {
    add(numbers) {
        if (numbers === "") return 0;

        let delimiter = /[\n,]/;
        let numberString = numbers;

        // Checking for custom delimiter at the beginning of the string
        if (numbers.startsWith("//")) {
            // Extract the custom delimiter (between '//' and '\n')
            const delimiterEndIndex = numbers.indexOf('\n');
            delimiter = new RegExp(`[${numbers[2]}]`);
            numberString = numbers.slice(delimiterEndIndex + 1);
        }

        const numberArray = numberString.split(delimiter);
        return numberArray.reduce((sum, num) => sum + parseInt(num), 0);
    }
}

module.exports = StringCalculator;
