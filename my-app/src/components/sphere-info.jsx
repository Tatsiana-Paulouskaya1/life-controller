import React from 'react';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
// import GoalsList from './goals-list';

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
`;

function SphereInfo() {
  return (
    <Paper>
      <form>
        <StyledContainer>
          <TextField
            id="multiline-static"
            label="Description"
            multiline
            rows="2"
            fullWidth
            defaultValue="Describe what this sphere means for you"
            // className={classes.textField}
            margin="normal"
          />
          <h1>80%</h1>
        </StyledContainer>
        {/* <div> %</div>
        <GoalsList /> */}
      </form>
    </Paper>
  );
}

export default SphereInfo;
