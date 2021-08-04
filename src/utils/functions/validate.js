// FORM VALIDATION
export const validate = (target) => {
  const inputs = [
    ...target.querySelectorAll('input[required], select, textarea'),
  ]

  const validatedFields = inputs.map((input) => {
    switch (input?.type) {
      case 'email':
        return validateEmail(input)
      case 'tel':
        return validatePhone(input)
      case 'text':
        return validateEmpty(input)
      case 'textarea':
        return validateEmpty(input)
      case 'select-one':
        return validateEmpty(input)
      default:
        break
    }
  })
  return validatedFields.every((item) => !item)
}

//INPUT VALIDATION
export const validateInput = (target) => {
  switch (target?.type) {
    case 'email':
      return validateEmail(target)
    case 'text':
      return validateEmpty(target)
    case 'tel':
      return validatePhone(target)
    case 'textarea':
      return validateEmpty(target)
    case 'select-one':
      return validateEmpty(target)
    default:
      break
  }
  return validateInput
}

const validateEmail = (input) => {
  if ((input.value !== '' && !isEmail(input.value)) || input.value === '') {
    return addError(input)
  } else {
    return removeError(input)
  }
}

const validateEmpty = (input) => {

  if (input.value === '') {
    return addError(input)
  } else {
    return removeError(input)
  }
}

const validatePhone = (input) => {
  if ((input.value !== '' && !isPhone(input.value)) || input.value === '') {
    return addError(input)
  } else {
    return removeError(input)
  }
}

const addError = () => {
  return true
}

const removeError = () => {
  return false
}

const isEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const isPhone = (phone) => {
  const re = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
  return re.test(String(phone))
}
