// https://forum.quasar-framework.org/topic/5062/email-validation-using-quasar-itself/3
const EMAIL_PATTERN =
  /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/

export function isValidEmail(value) {
  return EMAIL_PATTERN.test(value || '')
}
