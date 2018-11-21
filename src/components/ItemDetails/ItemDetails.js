import React, { Component } from 'react';
import { Button, Collapse, Well, Media, Row, Col } from 'react-bootstrap';

export default class ItemDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}
	render() {
		return (
			<div>
				<Button
					className="item-details-button"
					bsStyle="link"
					onClick={() => this.setState({ open: !this.state.open })}
				>
					{this.state.open ? `Hide` : `See`} item details
					{this.state.open ? ` -` : ` +`}
				</Button>
				<Collapse in={this.state.open}>
					<div>
						<Well>
							<Media>
								<Media.Left>
									<img
										width={100}
										height={100}
										alt="thumbnail"
										src="https://i5.walmartimages.com/asr/adbc7a5a-a5b5-4be5-b189-fb7295038fe3_1.e6596d9efffc9045e535168c565d955d.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
									/>
								</Media.Left>
								<Media.Body>
									<p>
										Essentials by OFM ESS-3083 Racing Style Gaming Chair, Blue
									</p>
									<Row className="show-grid">
										<Col md={6}>
											<strong>{`$${this.props.price}`}</strong>
											<br />
											<strong className="price-strike">{`$${
												this.props.price
											}`}</strong>
										</Col>
										<Col md={6}>Qty: 1</Col>
									</Row>
								</Media.Body>
							</Media>
						</Well>
					</div>
				</Collapse>
			</div>
		);
	}
}
