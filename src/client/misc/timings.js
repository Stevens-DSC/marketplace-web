const wait = (ms=0) => new Promise((resolve, reject) => setTimeout(resolve, ms))

export { wait }