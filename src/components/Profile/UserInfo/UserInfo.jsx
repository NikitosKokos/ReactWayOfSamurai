import s from './UserInfo.module.css';

const UserInfo = () => {
    return(
        <div className={s.info}>
            <div className={s.bg}>
              <img src="https://buki.com.ua/data/files/news/15542215853893.jpg"/>
            </div>
            <div className={s.user}>
                <div className={s.photo}>
                    <img src="https://buki.com.ua/data/files/news/15542215853893.jpg"/>
                </div> 
                <div className={s.text}>
                    <div className={s.name}>
                        Boris Ivanov
                    </div> 
                    <div className={s.about}>
                        My name is Boris and I live in Odessa
                    </div>
                </div>
               
          </div> 
      </div>
    );
}

export default UserInfo;