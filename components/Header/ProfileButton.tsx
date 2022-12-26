import React, { FC, useState } from 'react'
import Image from 'next/image'
import styles from '../../styles/Header.module.css'

// export const ProfileButton: FC<{
//     menuOpen: boolean;
//     setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   }> = ({ menuOpen, setMenuOpen }) => (

export const ProfileButton: FC<any> = () => {
  const [profile, setProfile] = useState(true)
  return <p>hello</p>
}
