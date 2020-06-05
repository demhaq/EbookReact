This project was created using React Library  using command npx create-react-app my-app.
React creates ready made App that comes with all dependency stored in the node_modules.
I created components to be rendered to the App as follows, all components are in components folder.
The components folder is subdivided to common,home and product folders. The home component is inside the home folder.
common folder contains shared components like navbar and texinput which are used by other components. The product folder contains main pages components like DeleteProduct, CreateProduct, SearchProduct, Product and Products. It also contains sub components DeleteList which renders table for Delete page. ProductList sub component of Product page it renders table in product page.ProductForm is sub component of CreateProduct it renders input form. 

Routes.
This are Routes I created to be rendered to myapp 





         <Switch>
          <Route path="/products" component={ProductPage} />
          <Route path="/product/" component={SearchProductPage} />
          <Route path="/delete" component={DeleteProductPage} />
          <Route path="/create" component={CreateProductPage} />
          <Route path="/" component={HomePage} />
        </Switch>

Products Route renders Products page so that the user can see all the products available in the Ebook Api.
To get all the products from the database I used fetch method to send get request to Ebook Api and fetch all the products.

Product Route renders Produdct page. This page gets user input either id or author name that corresponds to specific book requested from Api. The page also have two buttons that takes the user either to delete or create route.

Delete Route renders Delete page once the user press the delete button in the Product Page.  it displays table of rows each with its delete button that the user can delete specific row in the table. I used fetch method to send delete request to Ebook Api to delete a product based on the which button the user pressed.

Create Route renders CreateProduct page which the user can input values in the form provided so as to create new product. after clicking on submit button the a fetch request is send to Ebook Api using post request method and thus creating new product to be stored.

Home Route renders Home page .


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />


### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!



