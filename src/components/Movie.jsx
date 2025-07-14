function Movie (props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;
    return <div id={id} className="card movie">
    <div className="card-image waves-effect waves-block waves-light">
        {
            poster === 'N/A' ?
             <img className="activator" src="https://sun6-22.userapi.com/s/v1/ig2/2eWqT5YFIVf24CO0rE9FB7-srnsHNI0HRsdRkBP8zrsiMVK6Aow78DfGb_zfUlcUyCJlAqX90S3P1YPOHDgPavAp.jpg?size=400x0&quality=96&crop=32,0,202,202&ava=1" />
              :
             <img className="activator" src={poster} />
        }

    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{title}</span>
      <p>{year} <span className="right">{type}</span></p>
    </div>
  </div>
}

export {Movie}