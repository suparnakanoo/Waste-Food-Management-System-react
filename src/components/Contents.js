import React from 'react'
import pic1 from 'C:/Users/kanoo/my-app/src/images/pic1.webp'
import pic2 from 'C:/Users/kanoo/my-app/src/images/pic2.png'
import pic3 from 'C:/Users/kanoo/my-app/src/images/pic3.webp'

export default function Contents() {
  return (
    <>
    <div className="container">
    <div className="container1">
        <h3>What is Waste food and where does it come from?</h3>
        <p>Waste food describes food that was not used for its intended purpose. It is often referred to as food waste, is any edible 
            material that is discarded, lost, or left uneaten at any point in the food supply chain, from production and processing to
             distribution and consumption. This can include food that is thrown away by consumers, restaurants, grocery stores, or other 
             food businesses.</p>
        <p>Food waste can take various forms, including:</p>
        <ol>
            <li><h6>Plate waste:</h6> Food that is left on plates or discarded by consumers at home, restaurants, or cafeterias.</li>
            <li><h6>Spoiled or expired food:</h6> Food that becomes inedible due to spoilage, expiration dates, or quality concerns.</li>
            <li><h6>Trimmings and peels:</h6> Parts of fruits, vegetables, or meat that are removed during food preparation and cooking but could still be used or consumed.</li>
            <li><h6>Unsold or unserved food:</h6> Food that remains unsold in grocery stores or food markets or is left uneaten in commercial kitchens or at events.</li>
            <li><h6>Excess production and supply chain losses:</h6> Food that is lost during harvesting, transportation, storage, or processing before it reaches consumers.</li>
        </ol>
    </div>
    <div className="container2">
        <img src={pic1} alt="" />
    </div>
    </div>
    <div className="container">
    <div className="container2">
        <img src={pic2} alt="" />
    </div>
    <div className="container1">
        <h3>Effects of food waste on environment:</h3>
        <p>
        Wasted food has several adverse effects on the environment, making it an important environmental concern. 
        Here are some of the key environmental impacts of food waste:
        </p>
        <ul>
            <li>
                <h6>Greenhouse Gas Emissions:</h6> When food decomposes in landfills, it generates methane, a potent greenhouse gas that is much more
                 effective at trapping heat in the atmosphere than carbon dioxide (CO2). This contributes to global warming and climate change.
            </li>
            <li><h6>Deforestation:</h6> Clearing land for agriculture is a leading cause of deforestation in many parts of the world. When food is wasted,
                 it not only wastes the land used for production but also exacerbates the demand for more agricultural land.
            </li>
            <li><h6>Water Usage:</h6> Agriculture is a major consumer of freshwater resources. When food is wasted, it effectively squanders the water used
                 in its production, which is a critical issue in regions facing water scarcity.
            </li>
            <li><h6>Biodiversity Loss:</h6> Intensive agriculture practices, often driven by high demand for food, can lead to habitat destruction and loss
                 of biodiversity. Food waste contributes to this problem by increasing the pressure to produce more food.
            </li>
            <li><h6>Energy Consumption:</h6> The production, processing, and transportation of food require energy. When food is wasted, the energy used in
                 these processes is wasted as well.
            </li>
            <li><h6>Soil Degradation:</h6> Overproduction of food to meet high demand can lead to soil degradation and loss of soil fertility, which can 
                have long-term negative consequences for agriculture and ecosystems.
            </li>
            <li><h6>Pollution:</h6> The use of fertilizers and pesticides in agriculture can lead to water and soil pollution. When food is wasted, it 
                compounds the environmental impact of these chemicals.
            </li>
            
        </ul>
        
    </div>
    </div>
    <div className="container">
    <div className="container1">
        <h3>Management of waste food:</h3>
        <p>Managing food waste effectively involves strategies and practices to minimize the amount of food that ends up being discarded and ensuring
        that any waste generated is handled in an environmentally responsible manner. </p>
        <p>Here are steps to manage food waste:</p>
    <ul>
        <li><h6>Source Reduction:</h6>
           - The most effective way to manage food waste is to prevent it in the first place. This starts with careful meal planning, smart shopping, and portion control.
           - Buy only what you need, and try to use all perishable items before they go bad.</li>

        <li><h6>Composting:</h6>
           - Composting is an eco-friendly way to manage food scraps and food waste. Composting converts organic waste into nutrient-rich soil that can be used in gardening.
           - Set up a composting system in your backyard or check if your local municipality offers composting services or drop-off locations.
        </li>
        <li><h6>Donation:</h6>
           - If you have excess, non-perishable, and unopened food items, consider donating them to food banks or shelters to help those in need.</li>

        <li><h6>Food Rescue:</h6>
           - In some areas, there are organizations that rescue surplus food from restaurants, grocery stores, and events to redistribute it to those who can use it. Consider supporting or volunteering with such organizations.
        </li>
        <li><h6>Leftover Management:</h6>
           - Be mindful of leftovers and try to use them creatively in new meals. For example, use leftover vegetables in stir-fries or soups, and use leftover meat in sandwiches or salads.
        </li>
        <li><h6>Educate and Raise Awareness:</h6>
           - Educate yourself, your family, and your community about the importance of food waste reduction. Raise awareness about the environmental and social impacts of food waste.
           - Share tips and strategies for reducing food waste with friends and family.
        </li>
        <li><h6>Storage Solutions:</h6>
           - Invest in proper food storage containers and equipment to keep food fresh for longer periods. Airtight containers, vacuum sealers, and proper refrigeration can help extend the life of perishable items.
        </li>
        
    </ul>
    <p>By implementing these strategies and being mindful of your food consumption and disposal habits, you can effectively manage food waste and 
        contribute to a more sustainable and environmentally friendly food system.
    </p>    
    </div>
    <div className="container2">
        <img src={pic3} alt="" />
    </div>
    </div>
    </>
  )
}
