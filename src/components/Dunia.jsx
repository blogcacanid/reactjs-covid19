import React, { Component } from 'react';

class Dunia extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            sumPositif : [],
            sumSembuh : [],
            sumMeninggal : [],
            summaries : [],
            details : []
        };
    }

  componentDidMount() {
     this.getSumPositif()
     this.getSumSembuh()
     this.getSumMeninggal()
     this.getDetails()
  }

    getSumPositif = () => {
        fetch("https://api.kawalcorona.com/positif/")
        .then( response => response.json())
        .then(
            // handle the result
            (positif) => {
                this.setState({
                    isLoaded : true,
                    sumPositif : positif
                });
            },

            // Handle error
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }

    getSumSembuh = () => {
        fetch("https://api.kawalcorona.com/sembuh/")
        .then( response => response.json())
        .then(
            // handle the result
            (sembuh) => {
                this.setState({
                    isLoaded : true,
                    sumSembuh : sembuh
                });
            },

            // Handle error
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }

    getSumMeninggal = () => {
        fetch("https://api.kawalcorona.com/meninggal/")
        .then( response => response.json())
        .then(
            // handle the result
            (meninggal) => {
                this.setState({
                    isLoaded : true,
                    sumMeninggal : meninggal
                });
            },

            // Handle error
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }

  getDetails = () => {
        fetch("https://api.kawalcorona.com/")
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                this.setState({
                    isLoaded : true,
                    details : result
                });
            },

            // Handle error
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
}

  render() {
        const {error, isLoaded, sumPositif, sumSembuh, sumMeninggal, details} = this.state;
        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
    return (
        <div id="content" className="p-4 p-md-5">
            <h2 className="mb-4">Dunia</h2>



            <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-yellow"><i class="fa fa-group"></i></span>

                        <div className="info-box-content">
                            <span className="info-box-text">CONFIRMED</span>
                            <span className="info-box-number">{sumPositif['value']}</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-green"><i class="fa fa-smile-o"></i></span>
                        <div className="info-box-content">
                            <span className="info-box-text">RECOVERED</span>
                            <span className="info-box-number">{sumSembuh['value']}</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-red"><i class="fa fa-ambulance"></i></span>
                        <div className="info-box-content">
                            <span className="info-box-text">DEATHS</span>
                            <span className="info-box-number">{sumMeninggal['value']}</span>
                        </div>
                    </div>
                </div>
            </div>



                <h4>Sistem Informasi Penyebaran Corona (Covid-19) - Dunia</h4>
<table id="details" className="table table-bordered table-striped">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Country</th>
      <th scope="col">Confirmed</th>
      <th scope="col">Deaths</th>
      <th scope="col">Recovered</th>
      <th scope="col">Active</th>
    </tr>
  </thead>
  <tbody>
                    {
                        details.map(detail => (
    <tr key={detail.id}>
      <th scope="row">{detail.attributes.Country_Region}</th>
      <td>{detail.attributes.Confirmed}</td>
      <td>{detail.attributes.Deaths}</td>
      <td>{detail.attributes.Recovered}</td>
      <td>{detail.attributes.Active}</td>
    </tr>
                        ))
                    }

  </tbody>
</table>

        </div>



    );
    }
  }
}

export default Dunia;