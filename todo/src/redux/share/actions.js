
export const startLoading = () => ({
  type: "LOADER_START",

})
export const endLoading = () => ({
  type: "LOADER_END",

})
export const errorAction = (payload) => ({
  type: "ERROR",
  payload,
})


