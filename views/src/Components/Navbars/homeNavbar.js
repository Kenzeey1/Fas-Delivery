export function homeNavbar(){
    return "<link type='text/css'  href=\"./src/Components/Navbars/homeNavbar.css\" rel=\"stylesheet\">"+
        "<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark\" aria-label=\"Second navbar example\">" +
        "    <div class=\"container-fluid\">" +
        "      <label class=\"navbar-brand\" id='labelHomePage1'>FastDelivery</label>" +
        "      <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#Hnavbar\" aria-controls=\"navbarsExample02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">" +
        "        <span class=\"navbar-toggler-icon\"></span>" +
        "      </button>" +
        "      <div class=\"collapse navbar-collapse\" style='align-items: center;' id=\"Hnavbar\">" +
        "        <ul class=\"navbar-nav me-auto mb-2 mb-sm-0\" style='align-items: center;'>" +
        "          <li class=\"nav-item\" style='align-items: center;'>" +
        "            <button class=\"nav-link active btn btn-dark navbtn\" aria-current=\"page\" > Help </button>" +
        "          </li>" +
        "          <li class='nav-item' id='pageTypeContent' style='align-items: center;'>" +
        "              <label class=\"navbar-brand\" id='pageType'>Client Page</label>" +
        "          </li>"+
        "        </ul>" +
        "        <label class=\"navbar-brand\" id='labelHomePage2' >Click & Eat </label>" +
        "      </div>" +
        "    </div>" +
        "  </nav>";
}