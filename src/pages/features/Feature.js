import React from 'react'
import Banner from '../../components/banner/Banner'
import Benifit from '../../components/benifit/Benifit'
import Featurebanner from '../../components/featurebanner/Featurebanner'
import Groupstudy from '../../components/groupstudy/Groupstudy'
import Groupstudy2 from '../../components/groupstudy2/Groupstudy2'
import Groupstudy3 from '../../components/groupstudy3/Groupstudy3'
import Groupstudy4 from '../../components/groupstudy4/Groupstudy4'

function Feature() {
  return (
    <>
     <Featurebanner></Featurebanner>
     <Benifit></Benifit>
     <Groupstudy></Groupstudy>
     <Groupstudy2></Groupstudy2>
     <Groupstudy3></Groupstudy3>
     <Groupstudy4></Groupstudy4>
    </>
  )
}

export default Feature