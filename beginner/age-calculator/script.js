import { DateTime } from 'https://cdn.jsdelivr.net/npm/luxon@3.4.4/+esm';

const dateInput = document.getElementById('date');
const triggerBtn = document.getElementById('cal-btn');

triggerBtn.addEventListener('click', () => {
    if ('showPicker' in HTMLInputElement.prototype) {
        dateInput.showPicker();
    } else {
        dateInput.focus();
    }
});

class AgeCalculator {
    constructor(formId, inputId, resultId) {
        this.form = document.getElementById(formId);
        this.input = document.getElementById(inputId);
        this.resultContainer = document.getElementById(resultId);

        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleCalculate();
        })
    }

    calculateAge(dateString) {
        const birthDate = DateTime.fromISO(dateString);
        const today = DateTime.now();

        if (!birthDate.isValid) {
            throw new Error("Invalid date format!");
        }

        if (birthDate > today) {
            throw new Error("Are you sure you haven't been born yet?")
        }

        const diff = today.diff(birthDate, ['years', 'months', 'days']).toObject();

        return {
            years: Math.floor(diff.years),
            months: Math.floor(diff.months),
            days: Math.floor(diff.days)
        };
    }

    handleCalculate() {
        const inputValue = this.input.value;

        try {
            const age = this.calculateAge(inputValue);
            this.renderResult(`Congratulations, you have been alive for ${age.years} years, ${age.months} months, and ${age.days} days.`);
        } catch (error) {
            this.renderError(error.message);
        }
    }

    renderResult(text) {
        this.resultContainer.className = 'result';
        this.resultContainer.textContent = `${text}`;
    }

    renderError(message) {
        this.resultContainer.className = 'result error';
        this.resultContainer.textContent = message;
    }
}

new AgeCalculator('age-form', 'date', 'result');