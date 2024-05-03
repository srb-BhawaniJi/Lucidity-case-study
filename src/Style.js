import styled from "styled-components";

export const StyledAdminView = styled.div`
    margin-top: 20px;
    background-color: #1c1c1c;
    color: #ffffff;
    padding: 20px;
    h2{
        padding-bottom: 20px;
    }
    .widgets-container{
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        .widget{
            background-color: #2d2d2d;
            padding: 20px;
            border-radius: 4px;
            text-align: center;
            flex-basis: 23%;
            .widget-heading{
                display: flex;
                gap: 10px;
                flex-direction: row;
                gap: '12px'
                h3 {
                    color: #ffffff;
                    font-size: 18px;
                    margin-bottom: 10px;
                }
            }
            p {
                color: #ffffff;
                font-size: 24px;
                font-weight: bold;
                text-align: left;
                padding-left: 29px;
            }
        }
    }
`
export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    color: #ffffff;
    background-color: #2d2d2d;
    border-radius: 8px;
    thead{
        tr{
            th{
                padding: 16px 10px;
                text-align: left;
                .headers{
                    padding: 8px 12px;
                    font-size: 12px;
                    border-radius: 8px;
                    color: green;
                    background-color: #1c1c1c;
                }
            }
        }
    }
    tbody{
        min-height: 400px;
        tr{
            &.disable-row{
                background: #C0C0C0;
            }
            td{
                padding: 10px;
                border-top: 1px solid #444444;
                button{
                    padding: 8px 12px;
                    margin-right: 10px;
                    color: #ffffff;
                    background: transparent;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;

                    &:disabled {
                        background-color: #cccccc;
                        cursor: not-allowed;
                    }
                }
            }
        }
    }
`

export const StyledEditPopup = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    .popup-content{
        background-color: #2d2d2d;
        padding: 20px;
        border-radius: 4px;
        width: 400px;
        color: #fff;
        .heading{
            display: flex;
            justify-content: space-between;
        }
    }
`

export const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    .form-field{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin-bottom: 15px;
        width: 48%;
        label {
            color: #fff;
            margin-right: 10px;
        }

        input {
            flex: 0.5;
            padding: 8px;
            background-color: #333;
            border: none;
            border-radius: 4px;
            color: #fff;
        }
    }
    .form-btn{
        display: flex;
        justify-content: flex-start;
        margin-top: 20px;
        flex: 1;
        flex-direction: row-reverse;
        .save-btn{
            width: 50%;
            padding: 8px 12px;
            margin-right: 10px;
            color: #fff;
            background: #c0c0c0;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        .cancel-btn{
            width: 50%;
            padding: 8px 12px;
            margin-right: 10px;
            color: rgb(247 243 20);
            cursor: pointer;
            background: transparent;
            border: none;
        }
    }
    
`

export const StyledNav = styled.nav`
    background: #1c1c1c;
    color: #fff;;
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    .toggle-btn{
        display: flex;
        align-items: center;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 16px;

        span {
            color: #FFF;
            margin-left: 8px;
        }
    }
`
export const StyledUser = styled.div`
    margin-top: 20px;
    background-color: #1c1c1c;
    color: #ffffff;
    padding: 20px;
    h2{
        padding-bottom: 20px;
    }
    .widgets-container{
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        .widget{
            background-color: #2d2d2d;
            padding: 20px;
            border-radius: 4px;
            text-align: center;
            flex-basis: 23%;

            h3 {
                color: #ffffff;
                font-size: 18px;
                margin-bottom: 10px;
            }

            p {
                color: #ffffff;
                font-size: 24px;
                font-weight: bold;
            }
        }
    }
`