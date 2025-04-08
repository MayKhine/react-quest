import { FC, Suspense } from "react"
import { Logo } from "../layout/Logo"

export const ReactSuspense = () => {
  return (
    <div className="w-full p-10 bg-myWhite min-h-full h-auto">
      <Logo />
      <div className="w-full bg-myBlue flex flex-col justify-center items-center rounded-md p-10 gap-10">
        <div className="w-full bg-myLightBlue p-5 rounded-md">
          <p>Quest</p>
          <p>
            Experiment with react suspense, implement a suspense feature where
            we fetch data using suspense instead of useEffect or other thing...
          </p>
        </div>
        <div className="w-full bg-myLightBlue p-5 rounded-md flex flex-col justify-center items-center gap-4">
          <Suspense fallback={<div>loading...</div>}>
            <UserProfile />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

const UserProfile: FC = () => {
  const data = userResource.read()
  return (
    <div>
      User data
      <div>name: {data.name}</div>
      <div>age: {data.age}</div>
      <div>weight: {data.weight}</div>
    </div>
  )
}

const fetchUser = async () => {
  await new Promise((res, rej) => setTimeout(res, 5 * 1000))
  return { name: "May", age: 30, weight: 120 }
}

const wrappedPromise = (promise: Promise<any>) => {
  let status = "pending"
  let result

  const suspender = promise.then(
    (res) => {
      status = "success"
      result = res
    },
    (err) => {
      status = "error"
      result = err
    }
  )

  return {
    read: () => {
      if (status === "pending") {
        throw suspender
      } else if (status === "error") {
        throw result
      } else {
        return result
      }
    },
  }
}

const userResource = wrappedPromise(fetchUser())
