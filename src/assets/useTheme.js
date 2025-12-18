
export function useTheme(){
  const style = getComputedStyle(document.documentElement)

  return {
    primaryColor: style.getPropertyValue('--color-primary').trim(),
    successColor: style.getPropertyValue('--color-success').trim(),
    warningColor: style.getPropertyValue('--color-warning').trim(),
    dangerColor: style.getPropertyValue('--color-danger').trim(),
  }
}
