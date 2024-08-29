import {StyledPageTitle} from "./PageTitle.style"



function PageTitle({title,desc}) {
    return (
        <StyledPageTitle>
            <h3>{title}</h3>
            <span>{desc}</span>
        </StyledPageTitle>
    )
}

export default PageTitle