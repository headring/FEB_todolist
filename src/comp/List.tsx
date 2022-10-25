import styled from 'styled-components'
import { Data } from '../hooks/useFetch';
import Loading from './Loading';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .each{
    display: flex;
  }

`

interface propsType {
  data:Data[] | null;
  isPending: boolean | null;
}

const List = ({data, isPending}:propsType) => {

  return(
    <Wrapper>
      {isPending && <Loading />}
       {data && data.map(el => (
      <div className='each' key={el.id}>
        <input type='checkbox' />
        <h2>{el.title}</h2> 
        <p>{el.contents}</p>
        <button>Delete</button>
      </div>
    ))}
      

    </Wrapper>
  )

}

export default List