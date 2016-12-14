import './Dropzone.scss'
import React, {Component} from 'react'

export default class Dropzone extends Component {
    render() {
        return (
            <section className='dropzone' onDrop={this.props.onDrop}>
                <div className='zone'>
                    <h2>Drop your video file…</h2>
                </div>
            </section>
        )
    }
}
