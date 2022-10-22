import Loading from "./Loading";
import useFetch from "../hooks/useFetch";

// 노마드 리액트 유료강의 TS

export interface List{
  id: number;
  title: string;
  contents: string;
}

const Lists = () => {
  const [data, isPending, error] = useFetch("http://localhost:4000/list/");


  return(
    <div>
    {isPending && <Loading />}
    {data && data.map(el => (
      <div key={el.id}>
        <h2>{el.title}</h2>
        <p>{el.contents}</p>
      </div>
    ))}
  </div>

  )

}

export default Lists;