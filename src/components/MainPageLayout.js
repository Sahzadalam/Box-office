import React from 'react'
import Navs from './Navs'
import Title from './Title'

const MainPaageLayout = ({ children }) => 
    (
    <div>
        <Title title="Box Office By S.Khan" subtitle="Are you looking for a movie or an actor"/>
      <Navs/>
      {children}
    </div>
    )


export default MainPaageLayout
