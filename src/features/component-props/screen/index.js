import React from 'react'
import Card from '../components/Card'
import Field from '../../../components/Field'

const index = () => {
  return (
    <div>
      <div className='card-list'>
        <Card img={'https://as2.ftcdn.net/v2/jpg/01/45/03/73/1000_F_145037364_134WqYKSU40tvSVpsGcnZOmvJZ69Abl2.jpg'} />
        <Card
          img={'https://as2.ftcdn.net/v2/jpg/00/40/07/07/1000_F_40070703_GdVAUOlKAVvQKfocY3rVUYvOO2RzwEM3.jpg'}
          title='title1'
          body='body1'
        />
        <Card
          img={'https://as1.ftcdn.net/v2/jpg/00/03/40/94/1000_F_3409456_uSmbzwP0TQBLS3sgeB87e7nY0K8xLS.jpg'}
          title='title2'
          body='body2'
        />

        <Card
          img='https://t4.ftcdn.net/jpg/01/16/30/31/240_F_116303148_s9g2mnHl81GokrNKMeHkB5iToSQjKZu2.jpg'
        >
          <div>
            children
          </div>
        </Card>

      </div>

      <div>
        <Field
          label='label'
          name='name'
          placeholder='placeholder'
        />
      </div>

    </div>
  )
}

export default index
