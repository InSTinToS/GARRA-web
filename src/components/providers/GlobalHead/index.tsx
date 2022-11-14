/* eslint-disable @next/next/no-page-custom-font */

export const Inter = () => {
  return (
    <>
      <link rel='preconnect' href='https://fonts.googleapis.com' />

      <link
        rel='preconnect'
        crossOrigin='true'
        href='https://fonts.gstatic.com'
      />

      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap'
      />
    </>
  )
}

export const Roboto = () => (
  <>
    <link rel='preconnect' href='https://fonts.googleapis.com' />

    <link
      rel='preconnect'
      crossOrigin='true'
      href='https://fonts.gstatic.com'
    />

    <link
      rel='stylesheet'
      href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
    />
  </>
)

export const TwitterOG = () => <></>

export const FacebookOG = () => <></>

export const GlobalHead = () => (
  <>
    <meta charSet='utf-8' />

    <FacebookOG />
    <TwitterOG />

    <Roboto />
    <Inter />
  </>
)
