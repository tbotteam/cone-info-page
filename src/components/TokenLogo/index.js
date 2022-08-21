import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { isAddress } from '../../utils/index.js'
import token from '../../assets/token.svg'
import DEFAULT_TOKEN_LIST from '../../constants/token_list.json'

const BAD_IMAGES = {}

const Inline = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
`

const Image = styled.img`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: black;
  border-radius: 50%;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
`

export default function TokenLogo({ address, header = false, size = '24px', ...rest }) {
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(false)
  }, [address])

  if (error || BAD_IMAGES[address]) {
    return (
      <Inline>
        <span {...rest} alt={''} style={{ fontSize: size }} role="img" aria-label="face">
          🤔
        </span>
      </Inline>
    )
  }
  let path
  if (address?.toLowerCase() === '0xA60205802E1B5C6EC1CAFA3cAcd49dFeECe05AC9'.toLowerCase()) {
    path = token
  } else {
    const list = DEFAULT_TOKEN_LIST.tokens.filter((x) => x?.address?.toLowerCase() === address?.toLowerCase())
    if(address?.toLowerCase() === '0x1f681b1c4065057e07b95a1e5e504fb2c85f4625') {
      console.log('LOGO adr', isAddress(address));
    }
    path =
      list.length > 0
        ? list[0].logoURI
        : `https://raw.githubusercontent.com/cone-exchange/token-list/main/lists/images/${isAddress(
            address
          )}.png`
  }

  return (
    <Inline>
      <Image
        {...rest}
        alt={''}
        src={path}
        size={size}
        onError={(event) => {
          BAD_IMAGES[address] = true
          setError(true)
          event.preventDefault()
        }}
      />
    </Inline>
  )
}
