import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export class DetailedInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
          employee: {
            id: 1,
            firstName: "F.Name",
            lastName: "L.Name",
            status: "some text",
            skills: [{
                id: 0,
                name: "angular.js"
              },
              {
                id: 1,
                name: "react"
              },
              {
                id: 2,
                name: "node.js"
              },
              {
                id: 3,
                name: "scss"
              },
              {
                id: 4,
                name: "html"
              }
            ],
            gender: "female",
            birthday: "",
            description: "",
            profileFilledPercentage: 20,
            opened: true
          }
        }
        }

    render() {

        return (
          <div className="detailed-info">
            <div className="close-button" />
            <div className="left-column">
              <div className="avatar" />

            </div>

            <div className="info-view">
              <div className="info-view__main-info">
                <div className="info-view__name">
                  First Last
                </div>
                <div className="info-view__bio">
                  (Female, 22.08.1990)
                </div>
              </div>

              <div className="info-view__status">
                some text
              </div>

              <div className="info-view__skills-list">
                <div className="info-view__skill">
                  angular.js
                </div>
                <div className="info-view__skill">
                  react
                </div>
                <div className="info-view__skill">
                  node.js
                </div>
              </div>

              <div className="info-view__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        );
    }
}
