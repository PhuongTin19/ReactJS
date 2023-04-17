import React from 'react';

class AddComponent extends React.Component {

    state = {
        titleJob: '',
        salary: ''
    }

    handleChangeTitleJobs = (event) => {
        this.setState({
            titleJob: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault(); //prevent website reload
        console.log('>>> check data input: ', this.state);
    }

    render() {
        return (
            <form action="/action_page.php">
                <label htmlFor="fname">Title Jobs:</label><br />
                <input type="text"
                    value={this.state.titleJob}
                    onChange={(event) => this.handleChangeTitleJobs(event)} /><br />

                <label htmlFor="lname">Salary:</label><br />
                <input type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)}
                />
                <br /><br />
                <input type="submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form>

        )

    }

}

export default AddComponent;