import css from './Loader.module.css';
import { ThreeDots } from 'react-loader-spinner';

export default function Loader() {
    return (<div className={css.loaderContainer}><ThreeDots
        visible={true}
        height="40"
        width="40"
        color="#810b0b"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
  
      /></div>)
}