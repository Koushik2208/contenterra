import './App.css';

const Card = ({ item }) => {
    return (
        <div className='card container'>
            <div className='row row-field'>
                <div className='col-lg-2 field'>Title</div>
                <div className='col-lg-10 description'>{item.data.title}</div>
            </div>
            <div className='row row-field'>
                <div className='col-lg-2 field'>SelfText_HTML</div>
                <div className='col-lg-10 description'>{item.data.selftext_html}</div>
            </div>
            <div className='row row-field'>
                <div className='col-lg-2 field'>URL</div>
                <a href={item.data.url} target='blank' className='col-lg-10 description'>
                    {item.data.url}
                </a>
            </div>
            <div className='row row-field'>
                <div className='col-lg-2 field'>score</div>
                <div className='col-lg-10 description'>{item.data.score}</div>
            </div>
        </div>
    )
}

export default Card;
