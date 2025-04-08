const asyncMain = async () => {
  console.log("wait thing 1")
  try {
    const result = await wait()
    console.log("done thing 1", result)
  } catch (e) {
    console.error("e", e)
  }

  console.log("start thing 2")
  wait()
    .then((data) => {
      console.log("done thing 2", data)
    })
    .catch((err) => {
      console.error("e", e)
    })
  console.log("end?")
}

const anything = async () => {
  return 5
}

const wait = () => {
  return new Promise((res, rej) =>
    setTimeout(() => {
      res("hello data new new new")
    }, 5 * 1000)
  )
}

const main = async () => {
  const result = await anything()
  console.log("hi im ethan and i am ", result, "years old")

  await wait()

  // const result = read(1)
  // console.log("the result was", result)

  // try {
  //   const whatIsIt = read(2)
  //   console.log("the result of thrown was", whatIsIt)
  // } catch (e) {
  //   console.error("the error was", e)
  // }
}

const read = (input) => {
  if (input === 1) {
    return "good"
  } else {
    throw "the bad thing"
  }
}

// main()

const waitResult = wait()
console.log("what is wati  Result: ", waitResult)
