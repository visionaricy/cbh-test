# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1: Flag for Use of Internal or Custom ID for Displaying Agents on Report

**Acceptance criteria**:
- Create a flag field indicating the use of internal or custom ID on reports in the Facilities table of the database 
- Facilitate access and editing of the flag via an appropriate UI  

**Estimated time**: 4 hours

**Implementation details**:
- Add a boolean flag, ‘use_customer_id’, to the Facilities table 
- Provide a UI element for editing/accessing the ‘use_customer_id’ field in the facility view   

### Ticket 2: Field for Saving Custom ID for Agents in Database

**Acceptance criteria**: 
- Create a custom ID field in the Agents table of the database
- Facilitate access and editing of the field via an appropriate UI 

**Estimated time**: 3 hours 

**Implementation details**: 
- Add a ‘custom_id’ field to the Agents table 
- Provide a UI element for editing/accessing the ‘custom_id’ field in the Agents view  

### Ticket 3: Modification of ‘generateReport’ to Use Internal or Custom ID

**Acceptance criteria**: 
- If the ‘use_customer_id’ flag is set to true, ‘generateReport’ should use custom ID for displaying Agents on the report 
- If the ‘use_customer_id’ flag is set to false, ‘generateReport’ should use internal ID for displaying Agents on the report 

**Estimated time**: 1 hour

**Implementation details**: 
- Modify ‘generateReport’ to detect the ‘use_customer_id’ flag 
- If the flag is true, fetch the ‘custom_id’ field from the Agents table 
- If the flag is false, fetch the ‘internal_id’ field from the Agents table 

### Ticket 4: Testing and Bug Fixing

**Acceptance criteria**: 
- Carry out testing and verify the functionality of all components 
- Test corner cases and debug/fix all encountered bugs 

**Estimated time**: 2 hour

**Implementation details**: 
- Write unit tests for ‘generateReport’ and other components 
- Run end-to-end tests 
- Debug and fix any encountered bugs
