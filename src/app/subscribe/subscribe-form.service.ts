export class SubscribeFormService {
    getEmailFrequencyOptions() : String[] {
        return ["Daily", "Weekly", "Monthly"];
    }

    submitForm(forme) {
        console.log(forme);
    }
}
