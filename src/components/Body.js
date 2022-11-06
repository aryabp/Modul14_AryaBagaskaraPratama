import Table from 'react-bootstrap/Table';

function Body() {
    return(<div id='table'><Table striped bordered hover>
        <thead>
          <tr>
            <th>Index</th>
            <th>Title</th>
            <th>Subtitle</th>
            <th>Isbn</th>
            <th>Price</th>
            <th>Image</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Command-Line Rust</td>
            <td>A Project-Based Primer for Writing Rust CLIs</td>
            <td>9781098109431</td>
            <td>$37.90</td>
            <td><img alt='rust1' src='https://itbook.store/img/books/9781098109431.png'/></td>
            <td>https://itbook.store/books/9781098109431</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Practical Machine Learning with Rust</td>
            <td>Creating Intelligent Applications in Rust</td>
            <td>9781484251201</td>
            <td>$19.21</td>
            <td><img alt='rust2'src='https://itbook.store/img/books/9781484251201.png'/></td>
            <td>https://itbook.store/books/9781484251201</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Hands-On Concurrency with Rust</td>
            <td>Confidently build memory-safe, parallel, and efficient software in Rust	</td>
            <td>9781788399975</td>
            <td>$35.99</td>
            <td><img alt='3' src='https://itbook.store/img/books/9781788399975.png'/> </td>
            <td>https://itbook.store/books/9781788399975</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Beginning Rust, 2nd Edition</td>
            <td>Get Started with Rust 2021 Edition</td>
            <td>9781484272077</td>
            <td>$37.65</td>
            <td><img alt='4'src='https://itbook.store/img/books/9781484272077.png'/></td>
            <td>https://itbook.store/books/9781484272077</td>
          </tr>
          <tr>
            <td>5</td>
            <td>The Rust Programming Language</td>
            <td>Covers Rust 2018</td>
            <td>9781718500440	</td>
            <td>$26.02</td>
            <td><img alt='5'src='https://itbook.store/img/books/9781718500440.png'/></td>
            <td>https://itbook.store/books/9781718500440</td>
          </tr>
        </tbody>
      </Table></div>)
}

export default Body