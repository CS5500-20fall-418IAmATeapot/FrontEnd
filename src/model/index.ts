interface Address{
  line1:string,
  line2:string,
  line3:string,
  zipCode:string,
  city:string,
  state:string,
  country:string,
}

interface Name{
  firstName:string,
  lastName:string
}

interface User{
  userName:string,
  name:Name,
  phone:string,
  password:string,
  address?:Address,

}

export type { User,Name,Address }
