import useFetch, { Data } from "../hooks/useFetch";
import List from "./List";

// 노마드 리액트 유료강의 TS

const Lists = () => {
  const [data, isPending, error] = useFetch("http://localhost:4000/list/");


  return(
    <>
      <List data={data} isPending={isPending}/>
    </>
  )

}

export default Lists;