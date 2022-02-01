class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :power, :amps, :duration, :inputs, :outputs
  
  has_many :inputs
  has_many :outputs
  belongs_to :recipe_type

  def formatted_inputs

    x = 3
    y = 3

    output = []
    x.times do
      row = []
      y.times do
        row << nil
      end
      output << row
    end

    object.inputs.each { |input|
      realx = (input["relx"].to_f/18).floor() - 1
      realy = (input["rely"].to_f/18).floor()
      output[realy][realx] = {
        quantity: input.quantity,
        item: input.item
      }
    }

    return output

  end

end