import  { createContext, ReactNode, useState } from 'react'

interface SidebarInterface{
    isOpen: boolean
    setIsOpen: (bool:boolean) => void
    handleClose : () => void
}

export const SidebarContext = createContext<SidebarInterface | null>(null)

interface SidebarContextProviderProps {
    children: ReactNode;
}

const SidebarProvider = ({children} : SidebarContextProviderProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClose =()=>{
        setIsOpen(false)
    }

  return (
    <SidebarContext.Provider value={{isOpen, setIsOpen, handleClose}}>
        {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider