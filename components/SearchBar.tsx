'use client'

import React from "react"
import { SearchManufacturer, SearchButton } from "."
import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const SearchBar = () => {
  const router=useRouter()
  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel]=useState('')
  const handleSearch=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if (manufacturer === '' && model === '') {
      return alert('Please fill in search bar.')
    }
    updateSearchParams(model.toLowerCase(),manufacturer.toLowerCase())
  }

  const updateSearchParams=(model:string, manufacturer:string)=>{
    const searchParams = new URLSearchParams(window.location.search)

    if(model){
      searchParams.set('model',model)
    }else{
      searchParams.delete('model')
    }

    if(manufacturer){
      searchParams.set('manufacturer',manufacturer)
    }else{
      searchParams.delete('manufacturer')
    }
    
    const newPathName=`${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathName, {scroll: false})
  }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses='sm:hidden'/>
      </div>
      <div className="searchbar__item">
        <Image
          src='/model-icon.png'
          alt="model-icon"
          width={20}
          height={20}
          className="absolute ml-4"
        />
        <input 
          type="text" 
          name='model' 
          value={model} 
          onChange={(e)=>setModel(e.target.value)} 
          placeholder="Tiguan" 
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden"/>
      </div>
      <SearchButton otherClasses="max-sm:hidden"/>
    </form>
  )
}

export default SearchBar