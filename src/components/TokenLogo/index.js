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
  background-color: white;
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
  if (address?.toLowerCase() === '0x255707B70BF90aa112006E1b07B9AeA6De021424'.toLowerCase()) {
    path = token // todo change on cone adr
  } else {
    const list = DEFAULT_TOKEN_LIST.tokens.filter((x) => x.address.toLowerCase() === address.toLowerCase())
    path =
      list.length > 0
        ? list[0].logoURI
        : `https://raw.githubusercontent.com/pancakeswap/token-list/main/lists/images/${isAddress(
            address
          )}/logo.png`
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
