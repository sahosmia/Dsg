import { ReactNode } from "react"

export type LeaderShipItemType = {
   leaderShip:{
     id:number,
    name:string,
    designation:string,
    sector:string,
    photo:string,
   }
}

export type CtaType = {
    title:string,
    btnText:string,
    url:string,
}


export type SectionHeadingContentType = {
    title:string,
    content:string,
}

export type HeroCardType = {
  title:string,
  subtitle?:string,
  content?:string,
}


export type SolutionItemType = {
  solution : {
    id:number,
    image:string,
    title:string,
    content:string,
    banner:string
  }
}

export type IndustrieItemType = {
  industrie : {
    id:number,
    title:string,
    image:string,
    banner:string
  }
}

export type ChildrenType ={
  children: ReactNode,
}

export type ButtonType = {
  children:ReactNode,
  url:string
}