import React, { useContext } from 'react'
import { Menu as UikitMenu} from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import useGetPriceData from 'hooks/useGetPriceData'
import useGetLocalProfile from 'hooks/useGetLocalProfile'
import useAuth from 'hooks/useAuth'
import getChainName from 'utils/getChainName'
import getChainLogo from 'utils/getChainLogo'
import links from './config'
import { CAKE } from '../../constants'

const Menu: React.FC = (props) => {
  const { account, chainId } = useWeb3React()
  
  const { login, logout } = useAuth()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const priceData = useGetPriceData()
  const cakePriceUsd = priceData ? Number(priceData.data[CAKE.address].price) : undefined
  const profile = useGetLocalProfile()
  return (
    <UikitMenu
      netLogo={chainId !== undefined ? getChainLogo(chainId) : undefined}
      netName={chainId !== undefined ? getChainName(chainId) : undefined}
      platform="Exchange"
      links={links}
      account={account as string}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      cakePriceUsd={cakePriceUsd}
      profile={profile}
      {...props}
    />
  )
}

export default Menu
