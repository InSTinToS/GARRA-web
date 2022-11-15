import { Aside, Loupe, Radio, Search, Section, Style } from './styles'

import ProductsInRequests from './ProductsInRequests'

import List from '@app/components/organisms/List'

const Requests = () => {
  return (
    <Style>
      <Aside>
        <form>
          <Radio htmlFor=''>
            <input type='radio' />
            Pendentes
          </Radio>

          <Radio htmlFor=''>
            <input type='radio' />
            Encerrados
          </Radio>
        </form>
      </Aside>

      <Section>
        <Search>
          <Loupe />

          <input type='text' placeholder='Pesquisar pedidos' />
        </Search>

        <List
          items={[
            {
              header: ['Monitor Dell Full HD', '19/08/2001', 'Julio Casares'],
              content: (
                <>
                  <p key='1' style={{ marginBottom: 16 }}>
                    Solicito um novo monitor para uso pessoal com o objetivo de
                    melhorar a produtividade, pois o atual é muito pequeno.
                  </p>

                  <ProductsInRequests />
                </>
              )
            }
          ]}
        />
      </Section>
    </Style>
  )
}

export default Requests
