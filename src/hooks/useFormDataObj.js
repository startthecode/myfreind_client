export function useFormDataObj(val, initialState = false) {
  let formData = new FormData(val);
  let formObj = { ...initialState };
  Array.from(formData.entries()).forEach(([keys, value]) => {
    formObj[keys] = value;
  });

  return formObj;
}
