import emailjs from '@emailjs/browser';
export const useEmail = () => {
    const { VITE_EMAIL_JS_PUBLIC_KEY, VITE_EMAIL_JS_SERVICE_ID, VITE_EMAIL_JS_TEMPLATE_ID } = import.meta.env


    const sendEmail = async (form: HTMLFormElement) => {
        let success = false
        await emailjs.sendForm(VITE_EMAIL_JS_SERVICE_ID, VITE_EMAIL_JS_TEMPLATE_ID, form, VITE_EMAIL_JS_PUBLIC_KEY).then((result: any) => {
            success = result.text === "OK"

        }, () => {
            success = false
        });

        return success
    }

    return {
        sendEmail
    }
}