import { Button, Loupe, Search, Section, Style } from './styles'

import Info from './Info'

import List from '@app/components/organisms/List'

import { useRouter } from 'next/router'

const Products = () => {
  const router = useRouter()

  const items = [
    {
      header: ['Monitor HP Full HD (5)', '01/05/2022', 'Julio Casares'],
      content: (
        <Info
          key='Monitor HP Full HD (5)'
          data={{
            place: 'Almoxarifado',
            sector: 'Segundo Andar',
            name: 'Monitor HP Full HD (5)',
            barCodes: [
              '1231241240192041',
              '1231241240192041',
              '1231241240192041',
              '1231241240192041',
              '1231241240192041',
              '1231241240192041',
              '1231241240192041',
              '1231241240192041',
              '1231241240192041'
            ]
          }}
        />
      )
    }
  ]

  return (
    <Style>
      <Section>
        <Search>
          <Loupe />

          <input type='text' placeholder='Pesquisar produtos' />
        </Search>

        <List variant='secondary' items={items} />

        <Button
          type='button'
          onClick={() => {
            router.push('/admin/create-product')
          }}
        >
          Adicionar produto
        </Button>
      </Section>
    </Style>
  )
}
export default Products
