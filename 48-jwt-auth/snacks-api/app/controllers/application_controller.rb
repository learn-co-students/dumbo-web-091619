class ApplicationController < ActionController::API

  private

  def token
    payload = {}
    JWT.encode(payload, hmac_secret, 'HS256')
  end


  def hmac_secret
    "4W0xg9IgcV3PEsHkmPn6GCVn0Rm4dxhVl31Z7&lkh55#uusV#KEdApCR!Nn9u*HN#mSdkpj%Au%QN"
  end

  def client_has_valid_token?
    begin
      token = request.headers["Authorization"]
      decoded_array = JWT.decode(token, hmac_secret, true, { algorithm: 'HS256' })
      payload = decoded_array.first
    rescue #JWT::VerificationError
      return false
    end
    true
  end

  def current_user_id
    
  end

end